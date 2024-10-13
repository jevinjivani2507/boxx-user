import { useState } from 'react'
import { Sheet } from '@my/ui'
import LocationSelect from './locationSelect'
import { locations } from 'app/constants'
import { TLocation } from 'app/interface'

const FilterSheet = ({
  filterSheetOpen,
  setFilterSheetOpen,
}: {
  filterSheetOpen: boolean
  setFilterSheetOpen: (filterSheetOpen: boolean) => void
}) => {
  const [position, setPosition] = useState(0)

  const [selectedLocation, setSelectedLocation] = useState<TLocation[]>([])
  const [displayLocations, setDisplayLocations] = useState<TLocation[]>(
    locations.filter((location) => location.count)
  )

  return (
    <Sheet
      modal
      animation="medium"
      open={filterSheetOpen}
      onOpenChange={setFilterSheetOpen}
      snapPoints={[80]}
      position={position}
      onPositionChange={setPosition}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Handle bg="$gray8" />
      <Sheet.Frame ai="flex-start" jc="flex-start" gap="$10" bg="$color2" p="$4">
        <LocationSelect
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          displayLocations={displayLocations}
          setDisplayLocations={setDisplayLocations}
        />
      </Sheet.Frame>
    </Sheet>
  )
}

export default FilterSheet
