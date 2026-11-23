import * as fs from "fs"

const files = fs.readdirSync("./icons");

let importStatements = []

for (const name of files) {
	const file = Bun.file(`./icons/${name}`);

	const text = await file.text();

	const result = `<script lang="ts">
	export let color: string = 'currentColor';
	export let size: number = 15;
	export let width: number = size;
	export let height: number = size;
	</script>

	${text.replace(/width="15"/g, "{width}").replace(/height="15"/g, "{height}").replace("xmlns=\"http://www.w3.org/2000/svg\"", "xmlns=\"http://www.w3.org/2000/svg\" {...$$$restProps} class={$$$restProps.class || ''}").replace("fill=\"currentColor\"", "fill={color}")}`

	// Capitalize first char and every char after a dash, remove the dashes as well
	function formatName(name: string) {
		return name.replace(/(^|-)([a-z0-9])/g, (match, dash, char) => char.toUpperCase())
	}

	let formattedName = formatName(name.replace(".svg", ""))

	importStatements.push(`export { default as ${formattedName} } from "./icons/${formattedName}.svelte"`)

	Bun.write(`./src/lib/icons/${formattedName}.svelte`, result)
}

Bun.write("./src/lib/index.ts", importStatements.join("\n"))