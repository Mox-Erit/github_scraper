export async function load({ fetch }) {
	const contributions = await (await fetch('mox-erit/2024')).json()
	return { contributions }
}