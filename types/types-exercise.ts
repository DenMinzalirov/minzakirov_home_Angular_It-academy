interface BankAccount {
    money: number;
    deposit(value: number): void;
};

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};

interface Myself {
    name: string;
    bankAccount: BankAccount,
    hobbies: string[]
};

let myself: Myself = {
    name: "Alex",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

