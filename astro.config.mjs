// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'My Docs',
            plugins: [starlightCatppuccin({
                dark: {flavor: "frappe", accent: "sapphire"},
                light: {flavor: "latte", accent: "sapphire"},
            })],
            social: [{icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight'}],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {label: 'Example Guide', slug: 'guides/example'},
                    ],
                },
                {
                    label: 'Reference',
                    items: [{autogenerate: {directory: 'reference'}}],
                },
            ],
        }),
    ],

    adapter: cloudflare(),
});