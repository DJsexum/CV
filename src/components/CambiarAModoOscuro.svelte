<script lang="ts">
    import { onMount } from 'svelte';

    let isDark = $state(false); // Usamos $state para Svelte 5

    onMount(() => 
    {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
        {
            document.documentElement.classList.add('dark');
            isDark = true;
        }
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
    class="rounded-full border border-slate-300 bg-white p-2 text-slate-600 shadow-sm transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-cyan-400"
    aria-label="Alternar modo oscuro"
>
    {#if isDark}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 21v-2.25m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M12 18.75a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5Z" />
        </svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
    {/if}
</button>