import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {s} from './styles';

type HistoryItemProps = {
    date: string;
    type: string;
}

const HistoryItem = ({ date, type }: HistoryItemProps) => (
    <View style={s.historyItem}>
      <Icon name="calendar" size={16} style={s.calendarIcon} />
      <Text style={s.historyDate}>{date}</Text>
      <Text style={s.historyType}>{type}</Text>
    </View>
  );

  export default HistoryItem;

  