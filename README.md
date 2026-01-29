# LeetCode Practice System

As technology alleviated physical labor, people started going to gyms. As AI alleviates the need to write code, coding exercise becomes important for the programmer's mind.

This is a structured environment for practicing coding problems with TypeScript and Bun, guided by Claude. Work through the [NeetCode 150](https://neetcode.io/roadmap) roadmap to sharpen problem-solving skills, stay fresh with syntax, and enjoy the craft.

## Setup

```bash
bun install
```

## Usage with Claude Code

**Start a Problem:**

`"Let's work on the next problem"` or `"Setup two sum for me"`

Claude will scaffold the problem, run your tests, and guide you through with Socratic questioning—no hand-holding.

**Test your Solution:**

`"Test"`

Claude will run the tests and show you simplified results

**Talk it through:**

Once solution is found, Claude will ask you about your implementation and get you to describe time and space complexity in Big-O Notation.

Feel free to talk through the problem as you are solving it. Claude is instructed not to give you the answer but will give hints if you ask for them.

## Progress

View all modules, problems, completion status, and what's available next:

```bash
bun scripts/progress.ts
```

## Roadmap

- [x] NeetCode 150 problem scaffolding
- [ ] AI Generated real-world scenario challenges tailored to your tech stack/work
- [ ] AI Generated debugging exercises (fix the bug)
- [ ] AI Generated code review exercises (find the issues)
