import { ScoreType } from "@/lib/types"
import { Select, SelectItem } from "@tremor/react"
import { useCallback } from "react"

export interface ScoreSelectorProps {
  scoreType: ScoreType
  scoresAvailable: ScoreType[]
  setScoreType: (type: ScoreType) => void
}

export const ScoreSelector: React.FC<ScoreSelectorProps> = ({
  scoreType,
  scoresAvailable,
  setScoreType,
}) => {
  const handleSelectScoreType = useCallback(
    (type: string) => {
      setScoreType(type as ScoreType)
    },
    [setScoreType]
  )

  const isDisabled = scoresAvailable.length < 2

  return (
    <div className="max-w-sm space-y-6">
      <Select
        value={scoreType}
        onValueChange={handleSelectScoreType}
        disabled={isDisabled}
      >
        <SelectItem value={"local"}>Local</SelectItem>
        <SelectItem value={"reseau"}>Réseau</SelectItem>
        <SelectItem value={"tourisme"}>Tourisme</SelectItem>
      </Select>
    </div>
  )
}
