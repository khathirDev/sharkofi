
// Module: shark_coin
module shark_coin::shark {

    use sui::coin::{Self, Coin, TreasuryCap};
    use sui::url::new_unsafe_from_bytes;
    use sui::balance::{Balance};
    use sui::clock::{Self, Clock};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    // use sui::test_utils;

    const EInvalidAmount: u64 = 0;
    const ESupplyExceeded: u64 = 1;
    const ETokenLocked: u64 = 2;

    public struct SHARK has drop {}

    public struct MintCapability has key {
        id: UID,
        treasury: TreasuryCap<SHARK>,
        total_minted: u64,
    }

    public struct Locker has key, store {
        id: UID,
        unlock_date: u64,
        balance: Balance<SHARK>,

    }

    
    const TOTAL_SUPPLY: u64 = 1_000_000_000_000_000_000;
    const INITIAL_SUPPLY: u64 = 900_000_000_000_000_000;

    // 400_000_000_000_000_000

    // 1 shark will be 1bilion base units, the smallest tradeable units would be 0.000000001 SHARK which is 1 base unit.
    // usd value of 1 SHARK is around 0.000000001 USD, so 1 SHARK is worth 1 billion base units.

    fun init(otw: SHARK, ctx: &mut TxContext){
       
       let (treasury, metadata) = coin::create_currency(
            otw, 
            9, 
            b"SHARK", 
            b"SHARK", 
            b"Meet the apex predator of Sui Blockchain ocean! Dive into the ocean of fun, community and rewards.", 
            option::some(new_unsafe_from_bytes(b"https://khathir.sirv.com/sharkCover.jpg")), 
            ctx
        );

        
        let mut mint_cap = MintCapability {
            id: object::new(ctx),
            treasury,
            total_minted: 0,
        };

        mint( &mut mint_cap, INITIAL_SUPPLY, ctx.sender(), ctx);

        transfer::public_freeze_object(metadata);
        
        transfer::transfer(mint_cap, ctx.sender());
        
    }

    public fun mint(
        // we wont need the mut in the next line for the fourth strategy
        // treasury_cap: &mut TreasuryCap<SHARK>,
        // adding the mint cap in the next line is necessary for the third strategy
        mint_cap: &mut MintCapability, 
        amount: u64, 
        recipient: address, 
        ctx: &mut TxContext
    ) {
        
        let coin = mint_internal(mint_cap, amount, ctx);
        transfer::public_transfer(coin, recipient);

        
    }

    
    public fun mint_locked(
   
        mint_cap: &mut MintCapability, 
        amount: u64, 
        recipient: address,
        duration: u64,
        clock: &Clock, 
        ctx: &mut TxContext 
    ) {
        let coin = mint_internal(mint_cap, amount, ctx);
        let start_date = clock.timestamp_ms();
        let unlock_date = start_date + duration;
        let locker = Locker {
            id: object::new(ctx),
            unlock_date,
            balance: coin::into_balance(coin),
        };

        transfer::public_transfer(locker, recipient);
        
    }

    
    entry fun withdraw_locked(
        locker: Locker,
        clock: &Clock, 
        ctx: &mut TxContext
    ): u64 {
        let Locker { id, mut balance, unlock_date} = locker;
        assert!(clock.timestamp_ms() >= unlock_date, ETokenLocked);
        
        let locked_balance_value = balance.value();
        transfer::public_transfer(
            coin::take(&mut balance, locked_balance_value, ctx), 
            ctx.sender()
            );

            balance.destroy_zero();
            object::delete(id);

            locked_balance_value
        
    }

    fun mint_internal(
        
        mint_cap: &mut MintCapability, 
        amount: u64,  
        ctx: &mut TxContext
    ): coin::Coin<SHARK> {
        assert!(amount > 0, EInvalidAmount);
        assert!(mint_cap.total_minted + amount <= TOTAL_SUPPLY, ESupplyExceeded);

        
        let treasury = &mut mint_cap.treasury;

        let coin = coin::mint(treasury, amount, ctx);
        mint_cap.total_minted = mint_cap.total_minted + amount;
        coin
    }
    

    #[test_only]
    use sui::test_scenario;

    #[test_only]
    use sui::clock;

    #[test]
    
    fun test_init(){
        let publisher = @0x11;

        let mut scenario = test_scenario::begin(publisher);
    {
        let otw = SHARK {};
        init(otw, scenario.ctx());
    };

    scenario.next_tx(publisher);
    {
        let mint_cap = scenario.take_from_sender<MintCapability>();
        let shark_coin = scenario.take_from_sender<coin::Coin<SHARK>>();

        assert!(mint_cap.total_minted == INITIAL_SUPPLY, 0);
        assert!(shark_coin.balance().value() == INITIAL_SUPPLY, 0);

        scenario.return_to_sender(shark_coin);
        scenario.return_to_sender(mint_cap);
    };

    scenario.next_tx(publisher);
    {
        // let mut treasury_cap = scenario.take_from_sender<TreasuryCap<SHARK>>();
        let mut mint_cap = scenario.take_from_sender<MintCapability>(); 

        mint( 
            &mut mint_cap, 
            100_000_000_000_000_000, 
            scenario.ctx().sender(), 
            scenario.ctx()
        );

        assert!(mint_cap.total_minted == TOTAL_SUPPLY, 0);

       
        scenario.return_to_sender(mint_cap);
    };

    scenario.end();
    }
    
    #[test]
    fun test_lock_tokens() {
        let publisher = @0x11;
        let khathir = @0xB0B;

        let mut scenario = test_scenario::begin(publisher);
    {
        let otw = SHARK {};
        init(otw, scenario.ctx());
    };

    scenario.next_tx(publisher);
    {
        let mut mint_cap = scenario.take_from_sender<MintCapability>();
        let duration = 5000; //5 seconds
        let test_clock = clock::create_for_testing(scenario.ctx());

        mint_locked(
            &mut mint_cap, 
            100_000_000_000_000_000, 
            khathir, 
            duration, 
            &test_clock, 
            scenario.ctx()
        );

        assert!(mint_cap.total_minted == TOTAL_SUPPLY, EInvalidAmount);
        scenario.return_to_sender(mint_cap);
        clock::destroy_for_testing(test_clock);
        
    };

    scenario.next_tx(khathir);
    {
        let locker = scenario.take_from_sender<Locker>();
        let duration = 5000;
        let mut test_clock = clock::create_for_testing(scenario.ctx());

        clock::set_for_testing(&mut test_clock, duration);
        let amount = withdraw_locked(locker, &test_clock, scenario.ctx());
        

        assert!(amount == 100_000_000_000_000_000, EInvalidAmount);
        clock::destroy_for_testing(test_clock);
    };

    scenario.next_tx(khathir);
    {
       let coin = scenario.take_from_sender<coin::Coin<SHARK>>();
       assert!(coin.balance().value() == 100_000_000_000_000_000, EInvalidAmount);
       scenario.return_to_sender(coin);
    };

    scenario.end();

}

    #[test]
    #[expected_failure(abort_code  = ESupplyExceeded)]
    fun test_lock_overflow() {
        let publisher = @0x11;
        let khathir = @0xB0B;

        let mut scenario = test_scenario::begin(publisher);
    {
        let otw = SHARK {};
        init(otw, scenario.ctx());
    };

    scenario.next_tx(publisher);
    {
         let mut mint_cap = scenario.take_from_sender<MintCapability>();
        let duration = 5000; //5 seconds
        let test_clock = clock::create_for_testing(scenario.ctx());

        mint_locked(
            &mut mint_cap, 
            100_000_000_000_000_001, // this will cause an overflow
            khathir, 
            duration, 
            &test_clock, 
            scenario.ctx()
        );

        scenario.return_to_sender(mint_cap);
        clock::destroy_for_testing(test_clock);
    };

    scenario.end();

    }
    

    #[test]
    #[expected_failure(abort_code  = ESupplyExceeded)]
    fun test_mint_overflow() {
        let publisher = @0x11;
        

        let mut scenario = test_scenario::begin(publisher);
    {
        let otw = SHARK {};
        init(otw, scenario.ctx());
    };

    scenario.next_tx(publisher);
    {
         let mut mint_cap = scenario.take_from_sender<MintCapability>(); 

        mint( 
            &mut mint_cap, 
            100_000_000_000_000_001, // this will cause an overflow
            scenario.ctx().sender(), 
            scenario.ctx()
        );

      

        scenario.return_to_sender(mint_cap);
    };

    scenario.end();

    }

     #[test]
     #[expected_failure(abort_code  = ETokenLocked)]
    fun test_withdraw_locked_before_unlock() {
        let publisher = @0x11;
        let khathir = @0xB0B;

        let mut scenario = test_scenario::begin(publisher);
    {
        let otw = SHARK {};
        init(otw, scenario.ctx());
    };

    scenario.next_tx(publisher);
    {
        let mut mint_cap = scenario.take_from_sender<MintCapability>();
        let duration = 5000; //5 seconds
        let test_clock = clock::create_for_testing(scenario.ctx());

        mint_locked(
            &mut mint_cap, 
            100_000_000_000_000_000, 
            khathir, 
            duration, 
            &test_clock, 
            scenario.ctx()
        );

        assert!(mint_cap.total_minted == TOTAL_SUPPLY, EInvalidAmount);
        scenario.return_to_sender(mint_cap);
        clock::destroy_for_testing(test_clock);
        
    };

    scenario.next_tx(khathir);
    {
        let locker = scenario.take_from_sender<Locker>();
        let duration = 4999; // less than the unlock time
        let mut test_clock = clock::create_for_testing(scenario.ctx());

        clock::set_for_testing(&mut test_clock, duration);
        withdraw_locked(locker, &test_clock, scenario.ctx());
        

        clock::destroy_for_testing(test_clock);
    };

    scenario.end();

}

    
  }


