import { Icon } from "@moai/core";
import { icons } from "@moai/icon";

const IconBox = ({ name }: { name: string }): JSX.Element => (
	<div
		className="py-16 px-8 flex flex-col items-center space-y-8 text-center"
		style={{ width: 96 }}
	>
		<Icon display="block" path={(icons as any)[name]} />
		<div className="truncate w-full">{name}</div>
	</div>
);

export const GalleryIcon = () => (
	<div className="flex flex-wrap">
		{Object.keys(icons).map((key) => (
			<IconBox key={key} name={key} />
		))}
	</div>
);