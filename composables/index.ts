export const go = (name: string, id?: string | number) => {
  const router = useRouter()
  if (id)
    router.push(`/${name}/${id}`)
}
