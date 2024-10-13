import { useState } from 'react'
import { XStack, YStack, SizableText, Avatar } from '@my/ui'
import { LocateFixed, Search } from '@tamagui/lucide-icons'
import { LinearGradient } from 'tamagui/linear-gradient'
import { FilterSheet } from './components'

export const HomeScreen = ({ pagesMode = false }: { pagesMode?: boolean }) => {
  const [filterSheetOpen, setFilterSheetOpen] = useState(false)

  const handleOpenSheet = () => {
    setFilterSheetOpen(true)
  }

  return (
    <>
      <YStack f={1}>
        <LinearGradient
          flex={1}
          width="100%"
          colors={['#3D975E', '#008A32']}
          start={[1, 0]}
          end={[1, 1]}
          bblr="$12"
          bbrr="$12"
        >
          <YStack f={1} gap="$8" p="$4" pt="$8" w="100%" jc="space-between" height="30%">
            <XStack w="100%" jc="space-between">
              <XStack gap="$2" ai="center">
                <LocateFixed color="white" size="$2" />
                <YStack gap="$-1">
                  <SizableText size="$4" fontWeight={800} color="white">
                    Mota Varachhha
                  </SizableText>
                  <SizableText size="$2" color="white">
                    1234 Street Name
                  </SizableText>
                </YStack>
              </XStack>
              <Avatar circular size="$4">
                <Avatar.Image
                  accessibilityLabel="Cam"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                />
                <Avatar.Fallback backgroundColor="$background" />
              </Avatar>
            </XStack>
            <YStack gap="$-1.5">
              <SizableText size="$8" fontWeight={300} color="white">
                Find Your
              </SizableText>
              <SizableText size="$8" fontWeight={700} color="white">
                Box Cricket Turf
              </SizableText>
            </YStack>
            <XStack
              jc="flex-start"
              ai="center"
              gap="$3"
              backgroundColor="rgba(255, 255, 255, 0.15)"
              py="$2"
              px="$4"
              br="$12"
              onPress={handleOpenSheet}
            >
              <Search color="white" size="$2" />
              <YStack gap="$-1.5">
                <SizableText size="$3" fontWeight={600} color="white">
                  Search Places
                </SizableText>
                <SizableText size="$3" fontWeight={300} color="white">
                  Date Range & Time
                </SizableText>
              </YStack>
            </XStack>
          </YStack>
        </LinearGradient>
        <YStack f={1} jc="center" ai="center" gap="$8" p="$4" bg="$background" flexBasis="10%">
          <XStack
            pos="absolute"
            w="100%"
            t="$6"
            gap="$6"
            jc="center"
            fw="wrap"
            $sm={{ pos: 'relative', t: 0 }}
          >
            <SizableText size="$7" fontWeight={800}>
              Bottom Half
            </SizableText>
          </XStack>
        </YStack>
      </YStack>
      <FilterSheet filterSheetOpen={filterSheetOpen} setFilterSheetOpen={setFilterSheetOpen} />
    </>
  )
}
