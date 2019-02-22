<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Kokatiel</a>
      <ul class="right hide-on-med-and-down">
        <li>
          <a class="dropdown-trigger" href="#!" data-target="dropdown1">
            Dropdown
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </li>
        <ul id="dropdown1" class="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
          <li>
            <a href="#!">two</a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#!">three</a>
          </li>
        </ul>
        <li>
          <a href="javascript:;">Login</a>
        </li>
        <li>
          <a href="javascript:;">Cadastro</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
nav {
  background-image: linear-gradient(to right, #fe8c00, #f83600);
}
nav ul.dropdown-content a:hover {
  background-color: #fe8c00;
  color: white;
}
.dropdown-content li > a,
.dropdown-content li > span {
  color: #fe8c00;
}
#dropdown1 {
  top: 64px !important;
}
</style>
