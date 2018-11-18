export class CounterService{

    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;
    
    increamentActiveToInactive(){
        this.activeToInactiveCounter++;
        console.log('active to inactive: '+this.activeToInactiveCounter);
    }
    
    increamentInactiveToActiveCounter(){
        this.inactiveToActiveCounter++;
        console.log('inactive to active:'+this.inactiveToActiveCounter);
    }
}