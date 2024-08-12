import React from "react";

interface AuxProps {
	children: React.ReactNode;
}

import ConvexClientProvider from "../../../providers/ConvexCP";

const Aux = ({ children }: AuxProps) => (
	<div>
		<ConvexClientProvider>{children}</ConvexClientProvider>
	</div>
);

export default Aux;
