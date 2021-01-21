/*

In the real world, you will never have to implement a heap from scratch...but you may
be asked to do so in an interview. The solution below includes a MaxHeap class that you can
re-use in other prompts and real-world code.

Other walkthroughs:
* https://www.youtube.com/watch?v=fBPS7PtPtaE
* https://www.youtube.com/watch?v=-1jxt_DPl48

*/

class MaxHeap {
    constructor() {
        this.values = [Infinity];
        this.size = 0;
    }

    insert(val) {
        this.values.push(val);
        this.size++;

        let currentIndex = this.size;
        while (this.values[currentIndex] > this.values[Math.floor(currentIndex / 2)]) {
            const currentParentIndex = Math.floor(currentIndex / 2);
            [this.values[currentIndex], this.values[currentParentIndex]] = [
                this.values[currentParentIndex],
                this.values[currentIndex],
            ];
            currentIndex = currentParentIndex;
        }
    }

    popMax() {
        const maxValue = this.values[1];
        this.values[1] = this.values[this.size];
        this.values.pop();
        this.size--;
        if (this.size <= 1) return maxValue;

        let currentIndex = 1;
        while (true) {
            let maxChildIndex =
                (currentIndex * 2 <= this.size ? this.values[currentIndex * 2] : -Infinity) >
                    (currentIndex * 2 + 1 <= this.size
                        ? this.values[currentIndex * 2 + 1]
                        : -Infinity)
                    ? currentIndex * 2
                    : currentIndex * 2 + 1;

            if (
                this.values[currentIndex] >= this.values[maxChildIndex] ||
                maxChildIndex > this.size
            ) {
                break;
            }

            [this.values[currentIndex], this.values[maxChildIndex]] = [
                this.values[maxChildIndex],
                this.values[currentIndex],
            ];
            currentIndex = maxChildIndex;
        }
        return maxValue;
    }

    getMax() {
        if (this.size === 0) return null;
        return this.values[1];
    }
}

var lastStoneWeight = function (stones) {
    const stonesHeap = new MaxHeap();
    for (let i = 0; i < stones.length; i++) {
        stonesHeap.insert(stones[i]);
    }

    while (stonesHeap.size >= 2) {
        let [max1, max2] = [stonesHeap.popMax(), stonesHeap.popMax()];

        if (max1 !== max2) {
            max1 -= max2;
            stonesHeap.insert(max1);
        }
    }
    if (stonesHeap.size === 0) return 0;
    return stonesHeap.getMax();
};

