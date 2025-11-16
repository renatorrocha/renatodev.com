"use client";

import Snowfall from "react-snowfall";

export default function SnowFall() {
	return (
		<div className="fixed inset-0 z-0 pointer-events-none">
			<Snowfall snowflakeCount={200} />
		</div>
	);
}
