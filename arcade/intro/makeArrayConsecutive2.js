function makeArrayConsecutive2(statues) {
    
        let max = statues[0];
        let min = statues[0];
        
        for (let i = 1; i < statues.length; i++) {
            if (statues[i] > max) {
                max = statues[i];
            }
            if (statues[i] < min) {
                min = statues[i];
            }
        }
        
        console.log(min, max)
        let totalStatues = max - min + 1;
        let numStatues = totalStatues - statues.length;
        
        return numStatues;
    }