const roadmap = require("../roadmap.json");

let totalSolved = 0;
let totalProblems = 0;

for (const [key, mod] of Object.entries(roadmap.modules) as [string, any][]) {
	const solved = mod.problems.filter((p: any) => p.status === "completed").length;
	const total = mod.problems.length;
	totalSolved += solved;
	totalProblems += total;

	console.log(`${mod.name}: (${solved}/${total})`);
	for (const p of mod.problems) {
		const status = p.status === "completed" ? "✓" : "○";
		console.log(`  ${status} ${p.name} (${p.difficulty})`);
	}
	console.log("");
}

// Find available sections (prerequisites completed)
const available: string[] = [];
for (const [key, mod] of Object.entries(roadmap.modules) as [string, any][]) {
	const modSolved = mod.problems.filter((p: any) => p.status === "completed").length;
	const modComplete = modSolved === mod.problems.length;

	if (modComplete) continue; // Already done

	const prereqsMet = mod.prerequisites.every((prereq: string) => {
		const prereqMod = roadmap.modules[prereq];
		const prereqSolved = prereqMod.problems.filter((p: any) => p.status === "completed").length;
		return prereqSolved === prereqMod.problems.length;
	});

	if (prereqsMet) {
		available.push(mod.name);
	}
}

console.log("─".repeat(40));
console.log(`Progress: ${totalSolved}/${totalProblems} problems solved`);
console.log(`Available now: ${available.join(", ")}`);
