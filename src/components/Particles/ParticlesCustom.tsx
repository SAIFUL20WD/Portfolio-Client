import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
	type Container,
	type ISourceOptions,
	MoveDirection,
	OutMode,
} from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";

const ParticlesCustom = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadAll(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: "#000000",
				},
			},
			style: {
				height: "700px",
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#dc3545",
				},
				snow: {
					color: "#dc3545",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: false,
					speed: 6,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	if (init) {
		return (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
			/>
		);
	}

	return <></>;
};

export default ParticlesCustom;
