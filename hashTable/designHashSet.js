var MyHashSet = function () {
  this.set = [];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (!this.set.includes(key)) {
    this.set.push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const bucketIndex = this.set.findIndex((k) => k === key);
  if (bucketIndex > -1) {
    this.set.splice(bucketIndex, 1);
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.set.includes(key);
};
