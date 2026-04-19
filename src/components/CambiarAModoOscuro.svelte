<script lang="ts">
  import { onMount } from 'svelte';

  let isDark = $state(false);

  onMount(() => {
    isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) document.documentElement.classList.add('dark');
  });

  function toggle() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<button 
  onclick={toggle}
  class="relative h-10 w-20 rounded-full border-2 border-slate-300 dark:border-slate-600 p-1 transition-colors duration-500 shadow-md
  {isDark ? 'bg-slate-800' : 'bg-orange-100'}"
>
  <div 
    class="h-7 w-7 rounded-full shadow-lg transition-transform duration-500 flex items-center justify-center
    {isDark ? 'translate-x-10 bg-slate-100' : 'translate-x-0 bg-yellow-400'}"
  >
    {#if isDark}
       <span class="text-xs">🌙</span>
    {:else}
       <span class="text-xs">☀️</span>
    {/if}
  </div>
</button>