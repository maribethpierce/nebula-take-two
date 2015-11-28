exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    for(i in arr) {
        total+= arr[i];
    };
    return total;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i]===item) {
        arr.splice(i, 1);
      };
    };
    return arr;
  },

  reverseString : function(str) {
    return str.split('').reverse().join('');
  },

  longestSubString : function(str) {
    var longest = "";
    var list = str.split(' ');
    for(var i = 0; i < list.length; i++) {
      if(list[i].length>longest.length) {
        longest = list[i];
      };
    };
    return longest;
  },

  letterMoveForward : function(str) {

  },

  capitalizeWords : function(str) {
    return str.replace(/\w\S*/g, function(tStr) { 
      return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase();
    });
  }
};
