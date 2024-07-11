let student={
	name:"sharanya"
}
Object.prototype.getKeys = function() {
    return Object.keys(this);
};


console.log(student.getKeys()); 