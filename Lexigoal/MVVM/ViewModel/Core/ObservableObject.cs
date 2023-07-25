using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace DesktopChatClone.Core
{
	public class ObservableObject : INotifyPropertyChanged
	{
		public event PropertyChangedEventHandler? PropertyChanged;

		public virtual void OnPropertyChanged([CallerMemberName] string propertyname = null)
		{
			PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyname));
		}
	}
}
