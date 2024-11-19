// 'use client'

// import { getToken } from "@/lib/server"
// import { useAppSelector } from "@/redux/hooks"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

// const RoleProtection = (WrappedComponent: React.ComponentType<any>, allowedRoles: string[]) => {
//   const customer = useAppSelector((state) => state.customer)
//   const superAdmin = useAppSelector((state) => state.superAdmin)
//   const currentRole = customer?.role || superAdmin?.role
//   return (props: any) => {
//     // const worker = useAppSelector((state) => state.worker)
//     // const outletAdmin = useAppSelector((state) => state.outletAdmin)
//     // const driver = useAppSelector((state) => state.driver)
//     // || worker?.role || outletAdmin?.role || driver?.role || superAdmin?.role


//     const router = useRouter()
//     const checkUser = async () => {
//       const token = await getToken()
//       if (!token) {
//         router.push('/login')
//       }else if(!allowedRoles.includes(currentRole)){
//         router.push('/unauthorized')
//       }
//     }
//     useEffect(() => {
//       checkUser()
//     }, [currentRole])

//     return <WrappedComponent {...props} />
//   }
// }
// export default RoleProtection


'use client';

import { getToken } from "@/lib/server";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RoleProtection = (WrappedComponent: React.ComponentType<any>, allowedRoles: string[]) => {
  const ProtectedComponent = (props: any) => {
    const customer = useAppSelector((state) => state.customer);
    const superAdmin = useAppSelector((state) => state.superAdmin);
    const currentRole = customer?.role || superAdmin?.role;

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
