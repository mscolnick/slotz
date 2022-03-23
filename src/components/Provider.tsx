import mitt from 'mitt';
import React, { useEffect, useState } from 'react';
import { ISlotzContext, SlotzContext } from '../manager/context';
import { SlotzEmitter } from '../manager/events';
import { Manager } from '../manager/Manager';

function createState(): ISlotzContext {
  const bus: SlotzEmitter = mitt();
  return {
    bus,
    manager: new Manager(bus),
  };
}

export const Provider: React.FC = ({ children }) => {
  const [state] = useState(createState);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    state.manager.mount();
    setMounted(true);
    return () => {
      state.manager.unmount();
    };
  }, [state.manager]);

  if (!mounted) {
    return null;
  }

  return <SlotzContext.Provider value={state}>{children}</SlotzContext.Provider>;
};
