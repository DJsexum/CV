<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';

    let isDark = $state(false);

    onMount(() => 
    {
        // Sincronizar estado inicial con el DOM
        isDark = document.documentElement.classList.contains('dark');
    });

    function toggleTheme() 
    {
        isDark = !isDark;
        if (isDark) 
        {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } 
        else 
        {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }
</script>

<button 
    onclick={toggleTheme}
    class="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 dark:border-slate-700 dark:bg-slate-900"
    aria-label="Cambiar tema"
>
    {#if isDark}
        <div in:scale={{ duration: 300 }} out:scale={{ duration: 300 }} class="text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18.75a.75.75 0 0 1 .75.75V21.75a.75.75 0 0 1-1.5 0V19.5a.75.75 0 0 1 .75-.75ZM5.106 17.834a.75.75 0 0 0 1.06 1.06l1.591-1.59a.75.75 0 0 0-1.06-1.061l-1.591 1.59ZM3 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm3.166-5.894a.75.75 0 0 0-1.06 1.06l1.59 1.591a.75.75 0 1 0 1.061-1.06l-1.59-1.591Z" />
            </svg>
        </div>
    {:else}
        <div in:scale={{ duration: 300 }} out:scale={{ duration: 300 }} class="text-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
            </svg>
        </div>
    {/if}
</button>