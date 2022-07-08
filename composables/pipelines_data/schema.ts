import { z, literal, number, object, string, undefined, union } from "zod";

export type Run = z.infer<typeof run_validator>;
export const run_validator = object({
	_links: object({
		web: object({
			href: string()
		})
	}),
	state: union([
		literal("completed"),
		literal("inProgress")
	]),
	result: union([
		literal("canceled"),
		literal("failed"),
		literal("succeeded"),
		undefined()
	]),
	id: number()
});

export type ListRuns = z.infer<typeof list_runs_validator>;
export const list_runs_validator = object({
	count: number(),
	value: run_validator.array()
});

export type Artifact = z.infer<typeof artifact_validator>;
export const artifact_validator = object({
	// id: number(),
	name: string(),
	resource: object({
		downloadUrl: string()
	})
});

export type ListArtifacts = z.infer<typeof list_artifacts_validator>;
export const list_artifacts_validator = object({
	count: number(),
	value: artifact_validator.array()
});
