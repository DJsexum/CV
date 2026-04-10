<script lang="ts">
    // Usamos Svelte 5 runes
    let { habilidades = [] } = $props();
</script>

<div class="flex flex-wrap gap-3 mt-4">
    {#each habilidades as habilidad}
        <span class="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-500/20 transition-colors shadow-sm shadow-cyan-900/20">
            {habilidad}
        </span>
    {/each}
</div>