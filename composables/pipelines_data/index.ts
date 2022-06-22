import { fetch_runs, fetch_artifacts } from "./fetchers";
import { get_runs_cache, get_artifacts_cache, cache_runs, cache_artifacts } from "./cache";

export async function use_runs(bypass_cache = true) {
	let cached = bypass_cache ? undefined : get_runs_cache();
	if (cached) return cached.runs;

	let runs = await fetch_runs();
	cache_runs(runs);

	return runs;
}

export async function use_artifacts(run_id: number, bypass_cache = true) {
	let cached = bypass_cache ? undefined : get_artifacts_cache(run_id);
	if (cached) return cached.artifacts;

	let artifacts = await fetch_artifacts(run_id);
	cache_artifacts(run_id, artifacts);

	return artifacts;
}