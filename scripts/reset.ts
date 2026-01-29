import { rmSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const rootDir = join(import.meta.dir, '..')
const problemsDir = join(rootDir, 'problems')
const roadmapPath = join(rootDir, 'roadmap.json')

// Clear problems directory
if (existsSync(problemsDir)) {
	rmSync(problemsDir, { recursive: true })
	console.log('✓ Cleared problems directory')
}

// Reset roadmap.json - set all problems to not-started
const roadmap = require(roadmapPath)
for (const mod of Object.values(roadmap.modules) as any[]) {
	for (const problem of mod.problems) {
		problem.status = 'not-started'
	}
}
writeFileSync(roadmapPath, JSON.stringify(roadmap, null, 2) + '\n')
console.log('✓ Reset all problems in roadmap.json to not-started')

console.log('\nReset complete. Ready for a fresh start.')
