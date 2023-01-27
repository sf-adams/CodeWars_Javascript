## Using Foreach

function count (string) {  
 var count = {};
string.split('').forEach(function(s) {
count[s] ? count[s]++ : count[s] = 1;
});
return count;
}

## Using Reduce

function count (string) {
return string.split('').reduce(function(counts,char){
counts[char] = (counts[char]||0) + 1;
return counts;
},{});
}
