

<template>
  
    <aside class="flex-none h-screen sticky top-0 w-2/10" aria-label="Sidebar">
      <div class="h-screen overflow-y-auto py-10 px-4 bg">
         <ul class="space-y-2 text-lg">
            <li>
               <router-link to="/" class="flex justify-center items-center p-2 mb-4 text-white font-normal rounded-lg">
                  <p class="ml-3 text-3xl">ONG</p>
               </router-link>
            </li>
            <hr>
            <li>
               <router-link to="/" class="flex items-center p-2 text-white font-normal rounded-lg hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span class="ml-3">Início</span>
               </router-link>
            </li>
            <li>
               <router-link to="/animais" class="flex items-center p-2 font-normal text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
               <i class="flex-shrink-0 w-6 h-6  fa-solid fa-dog"></i>
               <span class="flex-1 ml-3 whitespace-nowrap">Animais</span>
               </router-link>
            </li>
            <li>
               <router-link to="/adotantes" class="flex items-center p-2 font-normal text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class="flex-shrink-0 w-6 h-6 fa-solid fa-person"></i>
                  <span class="flex-1 ml-3 whitespace-nowrap">Adotantes</span>
               </router-link>
            </li>
            <li>
               <router-link to="/fornecedores" class="flex items-center p-2 font-normal text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class="flex-shrink-0 w-6 h-6 fa-solid fa-box"></i>
                  <span class="flex-1 ml-3 whitespace-nowrap">Fornecedores</span>
               </router-link>
            </li>
            <li>
               <router-link to="/doacoes" class="flex items-center p-2 font-normal text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class="flex-shrink-0 w-6 h-6 fa-solid fa-parachute-box"></i>
                  <span class="flex-1 ml-3 whitespace-nowrap">Doações</span>
               </router-link>
            </li>
            <li>
               <router-link to="/compras" class="flex items-center p-2 font-normal text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class="flex-shrink-0 w-6 h-6 fa-solid fa-basket-shopping"></i>
                  <span class="flex-1 ml-3 whitespace-nowrap">Compras</span>
               </router-link>
            </li>
            <li>
               <button type="button" class="flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group hover:bg-gray-100 text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" @click="hidden = !hidden">
                     
                     <i class="flex-shrink-0 w-6 h-6 fa-solid fa-building"></i>
                     <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Funcionários</span>
                     <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
               </button>
               <ul id="dropdown-example" :class="{hidden: hidden}" class="py-2 space-y-2">
                     <li>
                        <router-link to="/atendentes" class="flex items-center rounded-lg p-2 pl-11 w-full text-base font-normal text-white dark:hover:bg-gray-700">
                           <i class="flex-shrink-0 w-6 h-6 fa-solid fa-person"></i>
                           <span class="flex-1 ml-3 whitespace-nowrap">Atendentes</span>
                        </router-link>
                     </li>
                     <li>
                        <router-link to="/veterinarios" class="flex items-center rounded-lg p-2 pl-11 w-full text-base font-normal text-white dark:hover:bg-gray-700">
                           <i class="flex-shrink-0 w-6 h-6 fa-solid fa-user-doctor"></i>
                           <span class="flex-1 ml-3 whitespace-nowrap">Veterinários</span>
                        </router-link>
                     </li>
                     <li>
                        <router-link to="/protetores" class="flex items-center rounded-lg p-2 pl-11 w-full text-base font-normal text-white dark:hover:bg-gray-700">
                           <i class="flex-shrink-0 w-6 h-6 fa-solid fa-shield-dog"></i>
                           <span class="flex-1 ml-3 whitespace-nowrap">Protetores</span>
                        </router-link>
                     </li>
               </ul>
            </li>
         </ul>
      </div>
    </aside>

</template>

<style scoped>
.bg {
   background-color: #212631 !important;
}
.hidden {
    display: none;
}
</style>

<script>
export default {
  data () {
     return {
       hidden: true
     }
  }
}
</script>
