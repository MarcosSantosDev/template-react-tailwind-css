import { create } from 'zustand';

type PanelState = {
	panelIsOpened: boolean;
	togglePanel: () => void;
};

export const usePanelState = create<PanelState>((set) => ({
	panelIsOpened: true,
	togglePanel: () => set((state) => ({ panelIsOpened: !state.panelIsOpened })),
}));
