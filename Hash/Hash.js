let user = {
  age: 54,
  name: "New Name",
  magic: true,
  screem: function () {
    console.log("ahhhhh");
  },
};

// console.log(user.age); // O(1)

user.spell = "abra adabara"; // O(1)

console.log(user);

user.screem();
