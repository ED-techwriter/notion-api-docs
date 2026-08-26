// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Документация Notion API',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ED-techwriter/notion-api-docs' }],
			plugins: [
				starlightOpenAPI([
					{
						base: 'reference',
						schema: './openapi.yaml',
					},
				]),
			],
			sidebar: [
				{
					label: 'Начало работы с API',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Обзор', slug: 'getting-started/overview' },
						{ label: 'Быстрый старт', slug: 'getting-started/quickstart' },
						{ label: 'Авторизация', slug: 'getting-started/authentication' },
					],
				},
				...openAPISidebarGroups,
			],
		}),
	],
});
