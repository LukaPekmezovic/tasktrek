import { OrganizationList } from "@clerk/nextjs";


export default function CreateOrganizactionPage() {
    return (
        <OrganizationList hidePersonal afterCreateOrganizationUrl="/organization/:id" afterSelectPersonalUrl="/organization/:id" />
    )   
}