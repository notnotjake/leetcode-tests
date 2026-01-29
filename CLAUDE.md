# LeetCode Practice System

A structured environment for practicing coding problems with TypeScript and Bun.

## Structure

```
leetcode-tests/
├── problems/
│   ├── <module-name>/              # Grouped problems (e.g., arrays-and-hashing)
│   │   └── <problem-name>/
│   │       ├── README.md           # Problem description, examples, constraints
│   │       ├── solution.ts         # User's solution (starter code provided)
│   │       ├── solution.test.ts    # Bun test cases
│   │       └── notes.md            # User's notes/lessons after solving
│   └── misc/                       # One-off problems not part of a module
│       └── <problem-name>/
├── roadmap.json                    # NeetCode roadmap with progress tracking
├── scripts/                        # Utility scripts
│   ├── progress.ts                 # View progress (bun scripts/progress.ts)
│   └── reset.ts                    # Reset all progress (bun scripts/reset.ts)
└── CLAUDE.md                       # This file
```

## Modules

Problems are grouped into modules following the NeetCode roadmap. See `roadmap.json` for the full dependency graph, problem lists, and completion status.

## Workflow

### Starting a Problem

User can:

- Specify a module and problem name
- Paste a problem from LeetCode or other source
- Describe a problem they want to practice
- Ask for a recommendation by module or difficulty

Claude will:

1. Create `problems/<module>/<problem-name>/` directory
2. Write `README.md` with problem description, examples, and constraints
3. Write `solution.ts` with function signature and starter code
4. Write `solution.test.ts` with test cases using Bun's test runner
5. Update `roadmap.json` to mark problem as in-progress

### Solving

1. User opens `solution.ts` in their IDE
2. User implements the solution
3. User says "test", "check", or "run" to have Claude execute tests
4. Claude runs `bun test problems/<module>/<problem-name>/solution.test.ts`
5. User iterates based on results

### Completing

When solved:

1. User adds notes to `notes.md` (lessons learned, time/space complexity, alternative approaches)
2. Claude marks problem as "completed" in `roadmap.json`

## Think-Aloud Mode

User may think out loud while solving problems. During this phase:

- **DO NOT** give hints, suggestions, or steer toward a solution
- **DO NOT** correct their thinking in real-time
- **DO** acknowledge briefly (e.g., "Got it", "Following along", "Noted")
- **DO** silently observe their reasoning process

After user submits a solution (says "test", "check", or "run"):

- Run the tests and display results in a user-friendly format (see Test Result Display below)
- **If tests fail:** Show the formatted results only. NO hints, NO explanations, NO commentary, NO conclusions about patterns in failures. Let user figure it out themselves - this is a critical part of learning.
- **If all tests pass:** Do NOT immediately explain or reflect. Instead, use a Socratic approach:
  1. Ask user to explain their approach in their own words
  2. Ask user to state the time complexity and why
  3. Ask user to state the space complexity and why
  4. Ask if they see any alternative approaches
  5. Only correct or fill gaps if they're wrong or stuck

The goal is to verify understanding, not lecture. Ask, don't tell. Be there to help if they don't know or are mistaken, but let them demonstrate knowledge first.

The struggle of debugging is where real learning happens. Don't shortcut it.

## Commands

When user says:

- **"test"** or **"check"** or **"run"**: Run tests for the current problem
- **"hint"**: Provide a hint without giving away the solution (only if explicitly requested)
- **"solution"**: Show a reference solution (only after user has attempted)
- **"list"** or **"history"**: Show all problems and their status
- **"new problem"**: Start a new problem

## Test Format

Tests use Bun's built-in test runner:

```typescript
import { expect, test, describe } from 'bun:test'
import { functionName } from './solution'

describe('Problem Name', () => {
	test('example 1', () => {
		expect(functionName(input)).toEqual(expectedOutput)
	})
})
```

## Running Tests

```bash
bun test problems/<module>/<problem-name>/solution.test.ts
```

## Test Result Display

When showing test results, format them as a clear table with:

- Pass/fail indicator (✓ or ✗)
- Test name
- Input values
- Expected output
- Actual output (for failures)

Example format:

```
**Results: 4 passed, 2 failed**

| Test | Input | Expected | Got |
|------|-------|----------|-----|
| ✓ example 1 | `"abc"`, `"cba"` | `true` | `true` |
| ✗ example 2 | `"foo"`, `"bar"` | `false` | `true` |
```

Do NOT add any commentary, conclusions, or observations about the results. Present the data only.

## Conventions

- Module names use kebab-case: `arrays-and-hashing`, `dynamic-programming`
- Problem folder names use kebab-case: `two-sum`, `valid-parentheses`
- Solutions export named functions matching the problem's expected signature
- Tests cover all provided examples plus edge cases
- Notes should include: approach, time complexity, space complexity, key insights
