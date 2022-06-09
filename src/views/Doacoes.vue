
<script>

import {reactive, toRefs, computed} from "vue";

export default {
  data() {
    return {
      doacoes: {}
    }
  },
  mounted() {
    fetch("/ong/doacoes")
    .then(res => res.json())
    .then(data => {
      this.doacoes = data;
    });
  }
}
</script>

<template>
  <div id="animais" class="rounded-lg m-10 px-12">
    
    <h1 class="font-medium leading-tight text-5xl mt-0 mb-2 ">Doacoes</h1>

    <ul class="divide-y divide-gray-100">
      <li class="px-4 pt-4 mt-3 text-2xl text-center">
            <div class="flex justify-center">
                <div class="w-2/3 m-2">Categoria</div>
                <div class="w-2/3 m-2">Estado</div>
                <div class="w-2/3 m-2">Editar</div>
            </div>
        </li>
        <li class="px-4 py-4 my-3 rounded-lg text-xl text-center text-black hover:text-white card drop-shadow-lg"
        v-for="doacao in doacoes" :key="doacao">
            <div class="flex justify-center">
                <div class="w-2/3 m-2">{{doacao.categoria}}</div>
                <div class="w-2/3 m-2">{{doacao.estado}}</div>
                <div class="w-2/3 m-2 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    Editar
                  </svg>
                </div>
            </div>
        </li>
    </ul>

  </div>
</template>

<style>

h1, li{
  color: #212631;
}

div {
  text-transform: capitalize !important;
}

.card {
  background-color: #fff !important;
}

.card:hover {
  background-color: #212631 !important;
  color: white;
}
</style>


