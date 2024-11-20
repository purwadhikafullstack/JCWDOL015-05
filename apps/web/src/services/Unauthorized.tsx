'use client';

import { getToken } from "@/lib/server";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RoleProtection = (WrappedComponent: React.ComponentType<any>, allowedRoles: string[]) => {
  const ProtectedComponent = (props: any) => {
    const customer = useAppSelector((state) => state.customer);
    const worker = useAppSelector((state)=> state.worker)
    const driver = useAppSelector((state)=> state.driver)
    const outletAdmin = useAppSelector((state)=> state.outletAdmin)
    const superAdmin = useAppSelector((state) => state.superAdmin);
    const currentRole = customer?.role || superAdmin?.role || worker?.employee.role || driver?.employee.role || outletAdmin?.employee.role

    const router = useRouter();

    useEffect(() => {
      const checkUser = async () => {
        const token = await getToken();
        if (!token) {
          router.push('/login');
        } else if (!allowedRoles.includes(currentRole)) {
          router.push('/unauthorized');
        }
      };

      checkUser();
    }, [currentRole, allowedRoles, router]);

    return <WrappedComponent {...props} />;
  };

  ProtectedComponent.displayName = `RoleProtection(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ProtectedComponent;
};

export default RoleProtection;
