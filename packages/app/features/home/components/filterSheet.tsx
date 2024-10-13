import { useState } from 'react'
import { SizableText, Sheet, YStack, XStack } from '@my/ui'
import { Search, X } from '@tamagui/lucide-icons'

interface TLocation {
  id: number
  locationName: string
  color: string
  count?: number
}

const locations: TLocation[] = [
  {
    id: 1,
    locationName: 'Mota Varachhha',
    color: '#E03131',
    count: 5,
  },
  {
    id: 2,
    locationName: 'Vesu',
    color: '#F06595',
    count: 3,
  },
  {
    id: 3,
    locationName: 'Adajan',
    color: '#BE4BDB',
    count: 2,
  },
  {
    id: 4,
    locationName: 'Piplod',
    color: '#5C7CFA',
    count: 2,
  },
  {
    id: 5,
    locationName: 'Pal',
    color: '#22B8CF',
  },
]

const Location = ({
  location,
  selectedLocation,
  setSelectedLocation,
  displayLocations,
  setDisplayLocations,
  showCancelButton = false,
}: {
  location: TLocation
  selectedLocation: TLocation[]
  setSelectedLocation: any
  displayLocations: TLocation[]
  setDisplayLocations: any
  showCancelButton: boolean
}) => {
  const { id, locationName, color, count = 0 } = location

  const backgroundColorWithOpacity = `${color}33`

  const handleLocationPress = () => {
    const existingLocation = { id, locationName, color, count }

    let updatedDisplayLocations
    let updatedSelectedLocation

    if (showCancelButton) {
      updatedDisplayLocations = [...displayLocations, existingLocation]
      updatedSelectedLocation = selectedLocation.filter((location) => location.id !== id)
      updatedDisplayLocations.sort((a, b) => a.id - b.id)
    } else {
      updatedDisplayLocations = displayLocations.filter((location) => location.id !== id)
      updatedSelectedLocation = [...selectedLocation, existingLocation]
    }

    setDisplayLocations(updatedDisplayLocations)
    setSelectedLocation(updatedSelectedLocation)
  }

  return (
    <XStack
      gap="$2"
      p="$1"
      px="$2.5"
      br="$12"
      backgroundColor={backgroundColorWithOpacity as any}
      onPress={handleLocationPress}
      ai="center"
    >
      <SizableText size="$4" fontWeight={600} color={color as any}>
        {locationName}
      </SizableText>
      {showCancelButton ? (
        <X color={color as any} size="$1" />
      ) : (
        <YStack px="$2" br="$12" backgroundColor={color as any}>
          <SizableText size="$1" color="white">
            {count}
          </SizableText>
        </YStack>
      )}
    </XStack>
  )
}

const FilterSheet = ({
  filterSheetOpen,
  setFilterSheetOpen,
}: {
  filterSheetOpen: boolean
  setFilterSheetOpen: (filterSheetOpen: boolean) => void
}) => {
  const [position, setPosition] = useState(0)

  const [selectedLocation, setSelectedLocation] = useState<TLocation[]>([])
  const [displayLocations, setDisplayLocations] = useState<TLocation[]>(locations)

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
        <YStack gap="$4" p="$4" w="100%">
          <SizableText size="$6" fontWeight={700}>
            Where do you want to play?
          </SizableText>
          <XStack
            backgroundColor="rgba(0, 0, 0, 0.04)"
            jc="flex-start"
            ai="center"
            gap="$3"
            px="$2.5"
            py={selectedLocation.length === 0 ? '$2.5' : '$2'}
            br="$4"
          >
            <Search size="$1" />
            {selectedLocation.length === 0 ? (
              <SizableText size="$3" fontWeight={600}>
                Search Localities
              </SizableText>
            ) : (
              <XStack gap="$2" flexWrap="wrap">
                {selectedLocation.map((location) => (
                  <Location
                    key={location.id}
                    location={location}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                    displayLocations={displayLocations}
                    setDisplayLocations={setDisplayLocations}
                    showCancelButton={true}
                  />
                ))}
              </XStack>
            )}
          </XStack>
          <XStack gap="$2" flexWrap="wrap">
            {displayLocations.map((location) => (
              <Location
                key={location.id}
                location={location}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                displayLocations={displayLocations}
                setDisplayLocations={setDisplayLocations}
                showCancelButton={false}
              />
            ))}
          </XStack>
        </YStack>
      </Sheet.Frame>
    </Sheet>
  )
}

export default FilterSheet
