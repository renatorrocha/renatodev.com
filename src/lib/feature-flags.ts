export const FEATURE_FLAGS = {
	/**
	 * activate christmas mode
	 * when active, displays:
	 * - snow fall effect (SnowFall)
	 * - christmas hat on avatar (fake png xD)
	 */
	CHRISTMAS_MODE: true,
} as const;

export function isChristmasModeEnabled(): boolean {
	return FEATURE_FLAGS.CHRISTMAS_MODE;
}
