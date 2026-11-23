<script lang="ts">
	export let color: string = 'currentColor';
	export let size: number = 15;
	export let width: number = size;
	export let height: number = size;
	</script>

	<svg {width} {height} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...$$restProps} class={$$restProps.class || ''}>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
    fill={color}
  />
</svg>
