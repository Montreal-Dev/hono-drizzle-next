import { getApiClient } from "@/lib/apiClient"
import { Button } from "@workspace/ui/components/button"

export default async function Page() {
  const api = await getApiClient()
  const test = await (await api.v1.demo[":id"].$get({param: {id: '123'}})).json()
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <p className="text-lg">
          {test.message}
        </p>
        <Button size="sm">Button</Button>
      </div>
    </div>
  )
}
