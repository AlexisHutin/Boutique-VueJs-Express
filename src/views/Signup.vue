<template>
  <div class="container">
    <div class="card p-5">
      <form class="form-signin" @submit="sendData" method="post">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="formGroupExampleInput">Username</label>
              <input
                v-model="username"
                name="username"
                type="text"
                class="form-control"
                placeholder="Username"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                v-model="email"
                type="email"
                name="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                v-model="password"
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                v-model="address"
                type="text"
                class="form-control"
                name="address"
                placeholder="1234 Main St"
              />
            </div>

            <div class="form-group">
              <label for="phone">Enter your phone number:</label>
              <input
                v-model="phone"
                type="text"
                class="form-control"
                name="phone"
              />
            </div>
          </div>
          <div class="py-3">
            <button type="submit" class="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import UsersService from "@/services/Users.service";

export default {
  name: "Signup",
  components: {},
  data() {
    return {
      username: null,
      email: null,
      password: null,
      address: null,
      phone: null,
    };
  },

  methods: {
    sendData: function (e) {
      e.preventDefault();
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        address: this.address,
        phone: this.phone,
      };
      UsersService.createUser(user).then((res) => {
        if (res) {
          console.log(res);
        }
      });
    },
  },
};
</script>