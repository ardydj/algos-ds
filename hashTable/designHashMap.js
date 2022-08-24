var MyHashMap = function () {
  //     hash function
  this.hashMap = [];
  this.hashFunction = (key) => {
    //         use the key since index
    const bucketIndex = key;
    return bucketIndex;
  };

  this.hasCollision = (key) => {
    return this.hashMap[this.hashFunction(key)]?.length > 0;
  };
  this.handleCollision = (key, value) => {
    this.hashMap[this.hashFunction(key)][1] = value;
  };
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  if (this.hasCollision(key)) {
    this.handleCollision(key, value);
  } else {
    this.hashMap[this.hashFunction(key)] = [key, value];
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const bucket = this.hashMap[this.hashFunction(key)];
  return bucket?.length > 1 ? bucket[1] : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  this.hashMap.splice(this.hashFunction(key), 1);
};
