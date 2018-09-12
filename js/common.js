window.onload = function() {
  let student1 = new Student("Alex", 30);
  let student2 = new Student("Alla");

  console.log(student1);
  console.log(student2);

  function Student(name, age) {
    this.name = name;
    this.age = age;

    this.skill = "webDev";
  }
};
