export class billionaire {
    private id!: number;
    private name!: string;
    private netWorth!: string;

    getId(): number {
        return this.id;
      }
    
    getAge() {
        return this.name;
      }

    getNetWorth(){
        return this.netWorth
    }

    setId(id: number): void {
        this.id = id;
      }
    
    setAge(name: string): void {
        this.name = name;
      }
    
    setName(netWorth: string): void {
        this.netWorth = netWorth;
      }

}