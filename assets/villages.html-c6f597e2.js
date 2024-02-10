import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},o=t(`<h1 id="things-to-know" tabindex="-1"><a class="header-anchor" href="#things-to-know" aria-hidden="true">#</a> Things to know</h1><p>When reading this you are expected to haver read the https://legendsmodding.github.io/ModdingDocs/world-generation/world-generation-intro.html and have everything in the https://legendsmodding.github.io/ModdingDocs/guide/game-config.html set up and working.</p><h1 id="adding-piglin-bases" tabindex="-1"><a class="header-anchor" href="#adding-piglin-bases" aria-hidden="true">#</a> Adding piglin bases</h1><p>In this part of the wiki, we will be talking about how to make piglin bases generate automatically like in the versus game mode. If you are looking into how to add piglin bases like in campain, That will be added to the wiki in the future and for any help ask in the <code>MCL</code> moding discord.</p><h2 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h2><ul><li>Adding <code>conquest</code> game mode as a <code>parent game mode</code> in the <code>game_mode.json</code> file</li><li>Adding the <code>outpost_slot</code> to the <code>placement.json</code> file.</li><li>Adding the biome to the <code>world_definition</code> file.</li></ul><h3 id="_1-adding-conquest-game-mode-as-a-parent-game-mode-in-the-game-mode-json-file" tabindex="-1"><a class="header-anchor" href="#_1-adding-conquest-game-mode-as-a-parent-game-mode-in-the-game-mode-json-file" aria-hidden="true">#</a> 1- Adding <code>conquest</code> game mode as a <code>parent game mode</code> in the <code>game_mode.json</code> file</h3><p>Open your <code>game_mode.json</code> file that could be found in <code>RP\\gamelayer\\launcher\\game_mode.json</code>. It should aready look something like this.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;game_modes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;behavior_pack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;default_privacy&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;loading_tip_set&quot;</span><span class="token operator">:</span> <span class="token string">&quot;campaign&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_players&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myth&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;resource_pack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;telemetry_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Myth_Mod_Template&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ui_style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lostLegend&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;myths_hub_host_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myth_test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You wanna add <code>&quot;parent&quot;: &quot;conquest&quot;,</code> were you can see downblow</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;game_modes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;behavior_pack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;default_privacy&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;loading_tip_set&quot;</span><span class="token operator">:</span> <span class="token string">&quot;campaign&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_players&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myth&quot;</span><span class="token punctuation">,</span>
-----------&gt;<span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;conquest&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;resource_pack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;telemetry_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Myth_Mod_Template&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ui_style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lostLegend&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;myths_hub_host_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myth_test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-adding-the-outpost-slot-to-the-placement-json-file" tabindex="-1"><a class="header-anchor" href="#_2-adding-the-outpost-slot-to-the-placement-json-file" aria-hidden="true">#</a> 2- Adding the <code>outpost_slot</code> to the <code>placement.json</code> file</h3><p>You need to add this card to your placement.json file</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;unique_card_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pvp_outpost_slot_outpost_slot&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;map_data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:piglin_pvp_faction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;village_data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;placement_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;outpost_slot&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;placement_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slot&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;initial_villages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;small&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jitter&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;biome&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;biome&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grasslands&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total_pixels&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;starting_pixels&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;outpost_slot&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;placement_rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;chunk_distance_from_parent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;distance_to_zero_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag_parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue_hq&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;chunk_distance_from_parent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;distance_to_zero_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag_parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red_hq&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;chunk_distance_from_parent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;distance_to_zero_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag_parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slot&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="information-about-code" tabindex="-1"><a class="header-anchor" href="#information-about-code" aria-hidden="true">#</a> Information about code</h4><ul><li>Placement rules. <ul><li>This makes sure that the bases are spread out.</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
        <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;chunk_distance_from_parent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">16</span><span class="token punctuation">,</span>
            <span class="token number">32</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;distance_to_zero_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;tag_parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slot&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>This makes sure that the base is far from the player bases and not in them or colliding with it.</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
        <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;chunk_distance_from_parent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">16</span><span class="token punctuation">,</span>
            <span class="token number">32</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;distance_to_zero_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;tag_parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue_hq&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>      <span class="token punctuation">{</span>
        <span class="token property">&quot;distance&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;chunk_distance_from_parent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token number">16</span><span class="token punctuation">,</span>
            <span class="token number">32</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;distance_to_zero_score&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;tag_parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red_hq&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3-adding-the-biome-to-the-world-definition-file" tabindex="-1"><a class="header-anchor" href="#_3-adding-the-biome-to-the-world-definition-file" aria-hidden="true">#</a> 3- Adding the biome to the <code>world_definition</code> file</h3><p>Add this in your <code>const WorldGenDefinition = { modify:(filterManager) =&gt; {}</code> function, In the <code>BP\\game_modes\\behavior_packs\\pvp\\scripts_bsharp20\\world\\world_gen_definition.js</code> file.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>PiglinPVPData<span class="token punctuation">.</span>numOutposts <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//the number of piglin bases you want to spawn</span>
filterManager<span class="token punctuation">.</span><span class="token function">AppendFilter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;outpost_slot&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> PiglinPVPData<span class="token punctuation">.</span>numOutposts<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="extra" tabindex="-1"><a class="header-anchor" href="#extra" aria-hidden="true">#</a> Extra</h1><ul><li>This is for people who wanna add extra functionality to there mods.</li></ul><h2 id="making-it-so-the-number-of-piglin-bases-corresponds-with-the-number-of-biomes" tabindex="-1"><a class="header-anchor" href="#making-it-so-the-number-of-piglin-bases-corresponds-with-the-number-of-biomes" aria-hidden="true">#</a> Making it so the number of piglin bases corresponds with the number of biomes</h2><p>In your <code>const WorldGenDefinition = { modify:(filterManager) =&gt; {}</code> function, In the BP\\game_modes\\behavior_packs\\pvp\\scripts_bsharp20\\world\\world_gen_definition.js\` file.| Replace</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>PiglinPVPData<span class="token punctuation">.</span>numOutposts <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//the number of piglin bases you want to spawn</span>
filterManager<span class="token punctuation">.</span><span class="token function">AppendFilter</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;outpost_slot&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> PiglinPVPData<span class="token punctuation">.</span>numOutposts<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>with</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const numBiomes = filterManager.GetFilterCount([&quot;biome&quot;])
        if (numBiomes &lt;= 5) {
            PiglinPVPData.numOutposts = 1
        } else if (numBiomes &lt;= 9) {
            PiglinPVPData.numOutposts = 2
        } else {
            PiglinPVPData.numOutposts = 3
        }
        filterManager.AppendFilter([&quot;outpost_slot&quot;], PiglinPVPData.numOutposts)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="information-about-code-1" tabindex="-1"><a class="header-anchor" href="#information-about-code-1" aria-hidden="true">#</a> Information about code</h4><p>You can replace the <code>filterManger.GetFilterCount([&quot;biome&quot;])</code> with anything you want like maybe number of players or something else</p>`,28),p=[o];function i(l,c){return s(),a("div",null,p)}const r=n(e,[["render",i],["__file","villages.html.vue"]]);export{r as default};
