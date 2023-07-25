using Lexigoal.MVVM.Model.Repository;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Lexigoal.MVVM.View
{
	/// <summary>
	/// Interaction logic for HomeView.xaml
	/// </summary>
	public partial class HomeView : UserControl
    {
        public HomeView()
        {
            InitializeComponent();
        }

		private void TextBox_GotFocus(object sender, RoutedEventArgs e)
		{
			if (string.IsNullOrEmpty(((TextBox)sender).Text))
			{
				((TextBox)sender).Tag = Visibility.Collapsed;
			}
		}

		private void TextBox_LostFocus(object sender, RoutedEventArgs e)
		{
			if (string.IsNullOrEmpty(((TextBox)sender).Text))
			{
				((TextBox)sender).Tag = Visibility.Visible;
			}
		}

		private void TextBox_EnterKeyDown(object sender, KeyEventArgs e)
        {
            if(e.Key == Key.Enter)
            {
				string inputValue = ((TextBox)sender).Text;

				System.Diagnostics.Debug.WriteLine($"Input Value: {inputValue}");

				MessageBox.Show($"You entered: {inputValue}");
			}
        }

	}
}
