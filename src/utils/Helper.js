 export function FilterData(searchInput,restronentes){
    return restronentes.filter((restro)=>restro?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase()));
}
